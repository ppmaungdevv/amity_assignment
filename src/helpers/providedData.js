const cities = ['A', 'B', 'C', 'D', 'E', 'F']

const routes = ['AB1', 'AC4', 'AD10', 'BE3', 'CD4', 'CF2', 'DE1', 'EB3', 'EA2', 'FD1']

const cost = { AB:1, AC:4, AD:10, BE:3, CD:4, CF:2, DE:1, EB:3, EA:2, FD:1 }

const edges = new Map()

const create_node = (city) => {
    edges.set(city, [])
}

cities.forEach(create_node)

const add_edge = (from, to, cost) => {
    edges.get(from).push({adj: to, cost})
}

routes.forEach(ele => {
    add_edge(ele[0], ele[1], ele[2])
})

export { cities, routes, edges, cost }