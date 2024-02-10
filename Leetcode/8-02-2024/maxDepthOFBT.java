


/*	
	104. Maximum Depth of Binary Tree


	Given the root of a binary tree, return its maximum depth.

	A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
*/

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    
    public int height(TreeNode root){
        
        if(root == null)
            return 0;
        
        int left=height(root.left)+1;
        int right=height(root.right)+1;
        
        return Math.max(left,right);
        
    }
    
    public int maxDepth(TreeNode root) {
        
        if(root == null)
            return 0;
        return height(root);
        
    }
}