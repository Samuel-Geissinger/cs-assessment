| Array Size      	| Insert      	| Append    	|
|-----------------	|-------------	|-----------	|
| extraLargeArray 	| 1.4371806 s 	| 4.8127 ms 	|
| largeArray      	| 12.531 ms   	| 643.9 μs  	|
| mediumArray     	| 224.9 μs    	| 172.6 μs  	|
| smallArray      	| 59.9 μs     	| 138 μs    	|
| tinyArray       	| 55.2 μs     	| 118.6 μs  	|




The append method is O(1), a constant value, whereas the insert method is O(n), where the smaller the array is, the faster it runs, and the more extensive the array is, the slower it runs.

The insert method needs to resize the array every time it is run. 

The append method does not need to resize the array as often. You could also say that the append method has an O(n) because of the need to resize the array at certain points. Because of how Javascript is written, the array has a default size, and when that size is too large, it is automatically resized. 