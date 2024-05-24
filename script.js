const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
   
  let currSum =0;
  let ans=[];
  let tempArr=[];
  
  for (let i=0; i<arr.length; i++)
	{
		if(currSum+arr[i] <= n)
			{
				tempArr.push(arr[i]);

				currSum+=arr[i];
				
			}

			else{
				ans.push(tempArr);
				tempArr=arr[i];
				currSum=arr[i];

			}
	}

	if(tempArr.length>0)
		{
			ans.push(tempArr);
		}

	return ans;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));



