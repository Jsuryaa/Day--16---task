setTimeout(function name() {
  const first = document.querySelector("#setTimeout");
  first.textContent = "10";
  setTimeout(function name(time) {
    const second = document.querySelector("#setTimeout");
    second.textContent = "9";
    setTimeout(function name(time) {
      const third = document.querySelector("#setTimeout");
      third.textContent = "8";
      setTimeout(function name(time) {
        const fourth = document.querySelector("#setTimeout");
        fourth.textContent = "7";
        setTimeout(function name(time) {
          const fifth = document.querySelector("#setTimeout");
          fifth.textContent = "6";
          setTimeout(function name(time) {
            const sixth = document.querySelector("#setTimeout");
            sixth.textContent = "5";
            setTimeout(function name(time) {
              const seven = document.querySelector("#setTimeout");
              seven.textContent = "4";
              setTimeout(function name(time) {
                const eight = document.querySelector("#setTimeout");
                eight.textContent = "3";
                setTimeout(function name(time) {
                  const nine = document.querySelector("#setTimeout");
                  nine.textContent = "2";
                  setTimeout(function name(time) {
                    const ten = document.querySelector("#setTimeout");
                    ten.textContent = "1";
                    setTimeout(function name(time) {
                      const ans = (document.querySelector("#setTimeout").innerText =
                        "Happy Independence Day");
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
 },1000);