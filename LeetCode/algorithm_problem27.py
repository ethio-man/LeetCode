class Solution:
    def removeElement(self,nums,val) :
        j=0
        while j<len(nums):
         if nums[j]==val:
             nums.pop(j)
         else:
              j=j+1
        return len(nums)
solution =Solution()
nums=[3,2,2,3]
num=solution.removeElement(nums,3)
print(f"{num} nums={nums}")