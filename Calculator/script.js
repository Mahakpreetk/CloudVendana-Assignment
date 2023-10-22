
  document.addEventListener("DOMContentLoaded", function () {
    const answerInput = document.querySelector('input[name="answer"]');
    const buttons = document.querySelectorAll('.grid-buttons input[type="button"]');
    
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const value = button.value;
        if (value === "=") {
          try {
           
            const expr = answerInput.value.replace(/&minus;/g, "-").replace(/&#247;/g, "/").replace(/&#215;/g, "*");
            const result = safeEval(expr);
            answerInput.value = result;
          } catch (error) {
            answerInput.value = "Error";
          }
        } else {
          answerInput.value += value;
        }
      });
    });
    
    document.querySelector('input[value=" AC "]').addEventListener("click", function () {
      answerInput.value = "";
    });
  
    // Safely evaluate mathematical expressions
    function safeEval(expr) {
      
      const pattern = /[^-()\d/*+.]/g;
      if (pattern.test(expr)) {
        throw new Error("Invalid input");
      }
      return Function(`'use strict'; return (${expr})`)();
    }
  });
  