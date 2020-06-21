/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
	let rev = 0
	const maxValue = Math.pow(2, 31) - 1
	const minValue = -Math.pow(2, 31)
	while (x != 0) {
		const pop = x % 10
		x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10)
		rev = rev * 10 + pop
	}

	if (rev > maxValue || rev < minValue) return 0

	return rev
}
