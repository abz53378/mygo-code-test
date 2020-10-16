import reverse from './index';
/**
 * Please use TypeScript/JS to answer question
 * Welcome to answer with unit testing code if you can
 *
 * After you finish coding, please push to your GitHub account and share the link with us.
 */
 
// Please write a function to reverse the following nested input value into output value
 
// Input:
const inputValue = {
  hired: {
    be: {
      to: {
        deserve: 'I'
      }
    }
  }
};
   
// Output:
const outputValue = {
  I: {
    deserve: {
      to: {
        be: 'hired'
      }
    }
  }
};

it('should be pass', () => {
  expect(reverse(inputValue)).toEqual(outputValue);
})