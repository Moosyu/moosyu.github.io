document.addEventListener('DOMContentLoaded', function () {
    const tooltipElements = document.querySelectorAll('.tooltip-target');
    const tooltip = document.getElementById('tooltip');
    let timeout;

    function showTooltip(event, element) {
      // storing the default title and then deleting it it
      const title = element.getAttribute('title');
      if (!title) return;
      element.setAttribute('data-title', title);
      element.removeAttribute('title');  // removing default title (so you dont see two when hovering)

      tooltip.textContent = title;
      tooltip.style.display = 'block';
      tooltip.style.opacity = 0;

      timeout = setTimeout(() => {
        tooltip.style.opacity = 1;
      }, 10); // 10ms

      // follow cursor
      document.addEventListener('mousemove', moveTooltip);
    }

    function hideTooltip(event, element) {
      clearTimeout(timeout);
      tooltip.style.opacity = 0;
      tooltip.style.display = 'none';

      const title = element.getAttribute('data-title');
      if (title) {
        element.setAttribute('title', title);
      }

      document.removeEventListener('mousemove', moveTooltip);
    }

    function moveTooltip(event) {
      tooltip.style.left = `${event.pageX + 10}px`;
      tooltip.style.top = `${event.pageY + 10}px`;
    }

    // listener
    tooltipElements.forEach(element => {
      element.addEventListener('mouseenter', (event) => showTooltip(event, element));
      element.addEventListener('mouseleave', (event) => hideTooltip(event, element));
    });
  });