/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(root==null) return []
    let queue = []
    queue.push(root)
    let returnData = []

    while(queue.length){
        const subresult = []
        const length = queue.length;
        for(let i = 0; i < length; i++){
            let current = queue.shift();
            console.log(current.val)
            subresult.push(current.val)
            if(current.left){queue.push(current.left)}
            if(current.right) {queue.push(current.right)}
        }
        returnData.unshift(subresult)
    }
    return returnData
};