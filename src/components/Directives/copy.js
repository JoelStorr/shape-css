export default {
  beforeUpdate(el, binding) {
    el.addEventListener('click', () => {
      const copyEl = document.createElement('textarea');
      copyEl.value = binding.value;
      copyEl.setAttribute('readonly', '');
      copyEl.style.position = 'absolute';
      copyEl.style.left = '-9999px';
      document.body.appendChild(copyEl);
      copyEl.select();
      document.execCommand('copy');
      document.body.removeChild(copyEl);
    });
  },
};
