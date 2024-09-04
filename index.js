
onload = () => {
    const header = document.getElementById('myHeader');
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);

    const b = setTimeout(() => {

        header.classList.remove('hidden');
        clearTimeout(b);
      }, 4000);
  };
  