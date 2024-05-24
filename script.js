const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let sum=0;
	for(let i=0;i<n;i++)
		{
			sum+=arr[i];
			
		}

	let subsum=sum/n;
	subsum=parseInt(subsum);
	
	let ans=[];

	for(let i=0; i<n ; i++)
		{
			let tempArr=[];
			let tempsum=0;

			while(tempsum<=subsum)
				{
					
					tempsum+=arr[i];
					
                    if(tempsum>subsum)
                        {
							break;
                        }
					if(tempsum==subsum)
					{
						tempArr.push(arr[i]);
						break;
					}
					tempArr.push(arr[i]);
					i++;
					
				}
			// i--;
			ans.push(tempArr);
			
		}

	return ans;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
