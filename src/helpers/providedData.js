export const cities = ['A', 'B', 'C', 'D', 'E', 'F']

export const nodes = ['A', 'B', 'C', 'D', 'E', 'F']

export const av_routes = {
    AB: 1,
    AC: 4,
    AD: 10,
    BE: 3,
    CD: 4,
    CF: 2,
    DE: 1,
    EB: 3,
    EA: 2,
    FD: 1
}

export const edges = {
    AB: 1,
    AC: 4,
    AD: 10,
    BE: 3,
    CD: 4,
    CF: 2,
    DE: 1,
    EB: 3,
    EA: 2,
    FD: 1
}

export const sample_edges = {
    A: [
        {node: 'B', cost: 1},
        {node: 'C', cost: 4},
        {node: 'D', cost: 10},
    ],
    B: [
        {node: 'E', cost: 3}
    ],
    C: [
        {node: 'D', cost: 4},
        {node: 'F', cost: 2}
    ],
    D: [
        {node: 'E', cost: 1}
    ],
    E: [
        {node: 'B', cost: 3},
        {node: 'A', cost: 2}
    ],
    F: [
        {node: 'D', cost: 1}
    ],
}

const paid_data = ['AB1', 'AC4', 'AD10', 'BE3', 'CD4', 'CF2', 'DE1', 'EB3', 'EA2', 'FD1']

export const t_edge = new Map()

const create_node = (city) => {
    t_edge.set(city, [])
}

const create_edge = (from, to, cost = null) => {
    t_edge.get(from).push({dest: to, cost})
}

cities.forEach(create_node)

paid_data.forEach(ele => {
    create_edge(ele[0], ele[1], ele[2])
})


export const showGraph = () => {
    let graph = ''
    nodes.forEach(node => {
        graph += node + '->' + sample_edges[node].map(n => n.node).join(', ') + '\n'
    })
    console.log(graph)
}