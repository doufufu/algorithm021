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
var levelOrder = function(root) {
    if(!root) return [];
    let returnData = []
    loop(root, 0)
    function loop(root, i){
        if(returnData[i]===undefined){
            returnData[i] = []
        }
        returnData[i].push(root.val)
        if(root.left){
            loop(root.left, i+1)
        }
        if(root.right){
            loop(root.right, i+1)
        }
    }
    return returnData
    console.log(returnData)
};
