class Solution(object):
    def removeDuplicates(self, nums):
        j = 1
        while j < len(nums):
            if nums[j - 1] == nums[j]:
                nums.pop(j)
            else:
                j += 1
        return len(nums)

nums = [1, 1, 2]
solution = Solution()
num = solution.removeDuplicates(nums)
print(f"{num}, nums = {nums}")