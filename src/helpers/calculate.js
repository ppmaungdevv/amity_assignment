import { edges, cost } from './providedData'

const get_cost_bfs = (start, end) => {
    const queue = [start]
    const visited = [start]
    const path = [start]
    let count = 0

    while (queue.length > 0) {
        const current = queue.shift()
        const adjs = edges.get(current)
        for (const adj of adjs) {
            if (adj.adj === end) {
                count++
                path.push(current)
            }

            if (!visited.includes(adj.adj)) {
                queue.push(adj.adj)
                visited.push(adj.adj)
            }
        }
    }
    return count
}

export const calculate_routes = (from, to) => {
    let route_not_exist = false
    let route = from + ' to ' + to
    let total = get_cost_bfs(from, to)
    return { route, total, route_not_exist}
}

export const calculate_cost = (route) => {
    let paired = '', total = 0, route_not_exist = false
    for (let index = 0; index < route.length-1; index++) {
        paired = route[index]+route[index+1]
        if (!cost[paired]) {
            route_not_exist = true
            total = 0
            continue
        }
        total += cost[paired]
    }
    return {route: route.join('-'), total, route_not_exist}
} 
