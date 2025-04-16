class Solution:
    def fizzBuzz(self, n):
        result=[]
        for j in range(1,n+1):
           if j%15==0:
               result.append("FizzBuzz")
           elif j%3==0:
               result.append("Fizz")
           elif j%5==0:
               result.append("Buzz")
           else:
               result.append(str(j))     
           j+=1
        return result
solution= Solution()
n=3
print(solution.fizzBuzz(n))