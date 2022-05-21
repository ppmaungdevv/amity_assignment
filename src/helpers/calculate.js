import { av_routes, cities } from './providedData'

export const calculate = () => {
    // accept two input params start && end
    const start = 'E', end = 'B';
    const city_pairs = Object.keys(av_routes)
    const start_with_input_start = {}, end_with_input_end = {}, final_result = {}

    if (Object.keys(av_routes).includes(start + end)) {
        final_result[start + end] = av_routes[start + end]
    }

    for (const key1 in av_routes) {
        if (key1.startsWith(start)) {
            start_with_input_start[key1] = av_routes[key1]
        }
        if (key1.endsWith(end)) {
            end_with_input_end[key1] = av_routes[key1]
        }
    }
    // consider the longer one
    let is_start_longer, longer_one ;
    if (Object.keys(start_with_input_start).length > Object.keys(end_with_input_end).length) {
        is_start_longer = true
        longer_one = start_with_input_start
    } else {
        is_start_longer = false
        longer_one = end_with_input_end
    }
    let combined_key
    for (const long in longer_one) {
        if (is_start_longer) {
            // start is longer so take chartAt(length - 1) of long && charAt(0) of short
            // and sum the end_with_input_end[short] with longer_one[long]
            for (const short in end_with_input_end) {
                if (long.charAt(long.length - 1) === short.charAt(0)) {
                    combined_key = long.charAt(0) + long.charAt(long.length - 1) + short.charAt(short.length - 1)
                    final_result[combined_key] = longer_one[long] + end_with_input_end[short]
                }
            }
        } else {
            // end is longer so take chartAt(0) of long && charAt(length - 1) of short
            // and sum the start_with_input_start[short] with longer_one[long]
            for (const short in start_with_input_start) {
                if (short.charAt(long.length - 1) === long.charAt(0)) {
                    combined_key = short.charAt(0) + short.charAt(short.length - 1) + long.charAt(short.length - 1)
                    final_result[combined_key] = longer_one[long] + start_with_input_start[short]
                }
            }
        }
    }
    console.log(final_result)
    
}
