function randomDigits() 
{
	var digits = new Array();
			
	for(i = 0; i < 4; i++) 
	{
		var correctDigit = false;
		while (correctDigit == false) //!correctDigit
		{
			var rnd = Math.random() * 9;
			var rounded = Math.floor(rnd);
			if (digits.includes(rounded) == false) 
			{
				digits.push(rounded);
				correctDigit = true;
			}
		}
	}
	return digits;
}