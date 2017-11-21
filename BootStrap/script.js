function printReverse(arr){

	for(var i = arr.length; i >= 0; --i){
		console.log(arr[i]);
	}

}

function isUniform(arr){

	for(var i = 0; i < arr.length - 1; ++i){
		if(arr[i] !== arr[i + 1]){
			return false;
		}
	}
	return true;
}

function sumArray(arr) {
	var sum = 0;

	arr.forEach(function(num){
		sum += num;
	});

	return sum;
}

function max(arr){
	var max = arr[0];

	arr.forEach(function(num){
		if(max < num){
			max = num;
		}
	});

	return max;
}