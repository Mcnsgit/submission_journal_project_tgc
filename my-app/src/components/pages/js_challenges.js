import Footer from "../components/Footer"
import Header from "../components/Header"
import CodeSnippet from "../components/CodeSnippet"


const JsChallenges = () => {
    return (
            <div>   
                <Header />
                <main>
            <div class="topic">
            <H2> Challenge 1 </H2>
            <p>The challenge function takes three arguments: breakfast, lunch, and dinner.
                It returns a string that concatenates these arguments with their respective meal times.</p>
        <CodeSnippet>  const challenge1 = (breakfast, lunch, dinner) =
        return `breakfast:${breakfast}, lunch:${lunch}, dinner:${dinner}`;</CodeSnippet>
    </div>
    <div class="topic">
    <h2>Challenge 2</h2>
        <p> takes a number as an argument.
     It checks if the number is a positive number.
     If the number is divisible by 15, it returns 'fizz buzz'.
     If the number is divisible by 3, it returns 'fizz'.
     If the number is divisible by 5, it returns 'buzz'.
     If none of the above conditions are met, it returns the number itself.</p>
     <CodeSnippet> 
        const challenge2 = (num) =
        if (typeof num !== 'number' || num 0) 
            return 'needs to be a positive number';
        if (num % 15 === 0) return 'fizz buzz';
        if (num % 3 === 0) return 'fizz';
        if (num % 5 === 0) return 'buzz';
        return num;
    </CodeSnippet>
</div>
<div class="topic">
    <h2>Challenge 3</h2>
    <p>function takes two numbers as arguments.
     It checks if both arguments are numbers.
     If they are, it adds them together.
     If the sum is even, it returns the sum.
     If the sum is odd, it returns the product of the two numbers.</p>
     <CodeSnippet> 
        const challenge3 = (num1, num2) =
            if (typeof num1 !== 'number' || typeof num2 !== 'number') 
        return 'make sure you enter 2 numbers';
    const sum = num1 + num2;
      return sum % 2 === 0 ? sum : num1 * num2;
    challenge3(3, 5);
    </CodeSnippet>
     </div>
     <div class="topic">
        <h2>Challenge 4</h2>
        <p>The challenge4 function generates an array of 5 random numbers between 1 and 50.</p>
        <code>
        const challenge4 = () =
        const numbers = [];for (let i = 0; i 5; i++) 
            numbers.push(Math.floor(Math.random() * 50) + 1);
        return numbers;
        </code> 
        </div>
        <div class="topic">
            <h2>Challenge 5</h2>
            <p>The challenge5 function generates an array of numbers from 9 to 0 in descending order.</p>
            <code>
                const challenge5 = () =
                    let array = [];
                    for (let i = 9; i = 0; i--) 
                        array.push(i)
                    
                    return array;
                ;

        </code>
            </div>
        </main>
        <Footer />
            </div>
    )
}

export default JsChallenges;

