import { getValue } from '@testing-library/user-event/dist/utils'
import { av_routes, cities, showGraph, nodes, t_edge, edges, sample_edges } from './providedData'

// console.log(t_edge)

const get_possible_routes = async () => {
    const start = 'E', end = 'E'
    const visited = new Set()
    const queue = [start]
    let count = 0
    const final_routes = []
    
    while (queue.length > 0) {
        const from = queue.shift()
        
        const dests = t_edge.get(from)
        
        for (const {dest} of dests) {

            if (dest === end) {
                count++
                console.log('here', start, from, dest, count)
            }
            if (!visited.has(dest)) {
                visited.add(dest)
                queue.push(dest)
            }
        }
    }
    console.log(count)
}

const dfs = (start, end, visited = new Set(), count = 0) => {
    console.log(start)
    visited.add(start)
    const dests = t_edge.get(start)
    // console.log(dests)
    for (const {dest} of dests) {
        if (dest === end) {
            count++
            console.log('here', start, end, visited, count)
            return
        }
        if (!visited.has(dest)) {
            // console.log('re', start, end)
            dfs(dest, end, visited, count)
        }
    }
}

export const calculate_cost = (route) => {
    let paired = '', total = 0, route_not_exist = false
    for (let index = 0; index < route.length-1; index++) {
        paired = route[index]+route[index+1]
        if (!edges[paired]) {
            route_not_exist = true
            total = 0
            continue
        }
        total += edges[paired]
    }
    return {route: route.join('-'), total, route_not_exist}
} 

// dfs('E', 'D')
// calculate_cost(['A', 'B', 'E'])
// calculate_cost(['A', 'D', 'F'])
// get_possible_routes()
