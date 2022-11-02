let lab1 = [5, 5, 0, 5, 5, 10, 10];
let lab2 = [5, 5, 5, 5, 5, 5, 10];
let lab3 = [5, 10, 10, 15];
let lab4_5 = [10, 5, 5, 5, 5, 5, 8, 10, 10, 10, 5];
let lab6 = [5, 5, 10, 5, 5, 10];
let lab8 = [5, 10, 10, 10, 5];
let quiz=32;


function main(lab) {
	function get_sum(lab) {
		let sum=0;
		for (let i=0; i < lab.length; i++) {
			sum += lab[i];
		}
		return sum;
	}	
	let sums = [get_sum(lab1), get_sum(lab2), get_sum(lab3), get_sum(lab4_5), get_sum(lab6), get_sum(lab8)];
	const results ={
		lab1, lab2, lab3, lab4_5, lab6, lab8,
		quiz1: quiz,
		sums: sums,
		total_score: (get_sum(sums)*60)/280+quiz
	}
	return results;
}

console.log(main(lab1, lab2, lab3, lab4_5, lab6, lab8));

