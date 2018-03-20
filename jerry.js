document.addEventListener('DOMContentLoaded', function() {
  let body                = document.getElementById('body');
  let tooltipContainer    = document.getElementById('tooltip__container');
  let tooltipName         = document.getElementById('tooltip__name');
  let tooltipRoom         = document.getElementById('tooltip__room');
  let roomList            = document.getElementById('room__list');
  let roomListContainer   = document.getElementById('room__list_container');
  let secretReset         = document.getElementById('secret');
  let scrollPadding       = document.getElementById('top_scroll_padding');
  let destinations        = [...document.querySelectorAll('.destination')];
  let highlightGroups     = [...document.querySelectorAll('.highlight__group')];

  generateHighlightRoomRows();
  let highlightRoomRows = [...document.querySelectorAll('.highlight__room')];

  window.addEventListener('resize', () => {
    setTooltipDisplay(); 
  });

  // Click handlers
  destinations.forEach(elem => {
    elem.addEventListener('click', handleRoomImageSelection);
  });

  highlightGroups.forEach(elem => {
    elem.addEventListener('click', handleHighlightGroupSelection);
  });

  // Refresh map after a period of inactivity
  let timeoutCounter = 0;
  (function resetTimeout() {
    window.setTimeout(() => {
      timeoutCounter++;
      if (timeoutCounter === 60) {
        location.reload()
      }
      resetTimeout();
    }, 1000);
  })();
  body.addEventListener('click', () => {timeoutCounter = 0});

  // Position the roomList scroll position
  let roomListOffset = (window.innerHeight / 2 - roomListContainer.offsetTop) * 2;
  scrollPadding.style.height = roomListOffset < 200 ? '200px' : roomListOffset + 'px';
  roomList.scrollTop = scrollPadding.offsetHeight;

  /********************
  Functions for selecting things
  ********************/
  function handleRoomNameSelection(e) {
    let id = this.dataset.id;
    highlightRoomImage(id);
    highlightRoomName(id);
    setTooltipDisplay();
  }

  function handleRoomImageSelection(e) {
    let id = e.target.id;
    highlightRoomImage(id);
    highlightRoomName(id);
    // Uncomment the next line to display the tooltip
    if (window.innerWidth < 1200) {
      setTooltipDisplay(id, e.x, e.y);
    } else {
      setTooltipDisplay();
    }
  }

  function handleHighlightGroupSelection(e) {
    let t = this;
    let selection = t.dataset.selection;
    let locations = document.querySelectorAll(`.${selection}`);
    locations.forEach(elem => {
      elem.classList.toggle(`${selection}_active`);
    })
    t.classList.toggle(`${selection}_active`);
    highlightRoomImage();
    highlightRoomName();
    setTooltipDisplay();
  }

  /********************
  Function for tooltip
  ********************/

  function positionTooltip(x, y) {
    let containerWidth = tooltipContainer.offsetWidth;
    let containerHeight = tooltipContainer.offsetHeight;
    let dist = 20;

    if (x > window.innerWidth / 2) {
      tooltipContainer.style.left = x - dist - containerWidth + 'px';
    } else {
      tooltipContainer.style.left = x + dist + 'px';
    }

    if (y > window.innerHeight / 2) {
      tooltipContainer.style.top = y - dist - containerHeight + 'px';
    } else {
      tooltipContainer.style.top = y + dist + 'px';
    }
  }

  function setTooltipDisplay(id, x, y) {
    if (id) {
      let dest = findDestinationByID(id);

      tooltipName.innerText = dest.name;
      tooltipRoom.innerText = dest.room || '';

      positionTooltip(x, y);
      tooltipContainer.style.display = 'inline-block';
    } else {
      tooltipContainer.style.display = 'none';
    }
  }

  /***************
  Helper functions
  ***************/
  function highlightRoomImage(id) {
    destinations.forEach(elem => elem.classList.remove('active'));
    if (id) {
      document.getElementById(id).classList.toggle('active');
    }
  }

  function highlightRoomName(id) {
    highlightRoomRows.forEach(elem => elem.classList.remove('active'));
    if (id) {
      let selection = document.getElementById(`highlight__row_${id}`);
      selection.classList.toggle('active');
      $(roomList).animate({
        scrollTop: selection.offsetTop + selection.offsetHeight / 2 - roomList.offsetHeight / 2
      }, 1000);
    }
  }

  function findDestinationByID(id) {
    return ROOM_MAP.filter(elem => elem.id === id)[0];
  }

  function generateHighlightRoomRows() {
    ROOM_MAP.forEach(elem => {
      let hl = document.createElement('div');
      hl.innerText = elem.name;
      hl.id = `highlight__row_${elem.id}`;
      hl.classList.add('highlight__row', 'highlight__room');
      hl.dataset.id = elem.id;

      let loc = document.createElement('div');
      loc.classList.add('highlight__row_location');
      loc.innerText = elem.room ? `${elem.room}` : '';
      hl.appendChild(loc);

      hl.addEventListener('click', handleRoomNameSelection);

      roomListContainer.appendChild(hl);
    });
  }
});
