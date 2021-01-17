/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(root==null) return []
    let queue = []
    queue.push(root)
    let res = 0
    while(queue.length){
        let length = queue.length
        for(let i = 0; i < length; i++){
            let current = queue.shift()
            console.log(current)
            if(current.children){
                for(let i = 0 ; i < current.children.length;i++){
                     queue.push(current.children[i])    
                }
            }
        }
        res++
    }
    return res
};