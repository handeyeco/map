const ROOM_MAP = function() {

  return [
    {
      id: 'uc001',
      floor: 3,
      room: null,
      name: 'Reception',
    },
    {
      id: 'uc002',
      floor: 3,
      room: null,
      name: 'East Stairs, 3rd',
    },
    {
      id: 'uc003',
      floor: 3,
      room: null,
      name: 'West Stairs, 3rd',
    },
    {
      id: 'uc004',
      floor: 3,
      room: null,
      name: 'Elevator, 3rd',
    },
    {
      id: 'uc005',
      floor: 3,
      room: null,
      name: 'Men\'s Room, 3rd',
    },
    {
      id: 'uc006',
      floor: 3,
      room: null,
      name: 'Women\'s Room, 3rd',
    },
    {
      id: 'uc007',
      floor: 3,
      room: null,
      name: 'Kitchen, 3rd',
    },
    {
      id: 'uc008',
      floor: 3,
      room: null,
      name: 'Auditorium, 3rd',
    },
    {
      id: 'uc009',
      floor: 3,
      room: null,
      name: 'Dining Hall',
    },
    {
      id: 'uc010',
      floor: 3,
      room: null,
      name: 'Water Closet, 3rd',
    },
    {
      id: 'uc011',
      floor: 3,
      room: null,
      name: 'Media Storage',
    },
    {
      id: 'uc012',
      floor: 3,
      room: null,
      name: 'Work Space, 3rd',
    },

    {
      id: 'uc310',
      floor: 3,
      room: 310,
      name: 'Quartz',
    },
    {
      id: 'uc315',
      floor: 3,
      room: 315,
      name: 'Chop Shop',
    },
    {
      id: 'uc320',
      floor: 3,
      room: 320,
      name: 'Prototype Lab',
    },
    {
      id: 'uc330',
      floor: 3,
      room: 330,
      name: 'Slate',
    },
    {
      id: 'uc340',
      floor: 3,
      room: 340,
      name: 'Canvas',
    },
    {
      id: 'uc350',
      floor: 3,
      room: 350,
      name: 'Stone',
    },
    {
      id: 'uc360',
      floor: 3,
      room: 360,
      name: 'Oak',
    },

    {
      id: 'uc013',
      floor: 4,
      room: null,
      name: 'West Stairs, 4th',
    },
    {
      id: 'uc014',
      floor: 4,
      room: null,
      name: 'Elevator, 4th',
    },
    {
      id: 'uc015',
      floor: 4,
      room: null,
      name: 'East Stairs, 4th',
    },
    {
      id: 'uc016',
      floor: 4,
      room: null,
      name: 'Men\'s Room, 4th',
    },
    {
      id: 'uc017',
      floor: 4,
      room: null,
      name: 'Women\'s Room, 4th',
    },
    {
      id: 'uc018',
      floor: 4,
      room: null,
      name: 'Kitchen, 4th',
    },
    {
      id: 'uc019',
      floor: 4,
      room: null,
      name: 'Dining Space',
    },
    {
      id: 'uc020',
      floor: 4,
      room: null,
      name: 'Auditorium, 4th',
    },
    {
      id: 'uc021',
      floor: 4,
      room: null,
      name: 'Water Closet, 4th',
    },
    {
      id: 'uc022',
      floor: 4,
      room: null,
      name: 'Work Space, 4th',
    },

    {
      id: 'uc400',
      floor: 4,
      room: 400,
      name: 'Marble',
    },
    {
      id: 'uc401',
      floor: 4,
      room: 401,
      name: 'Electrical Closet',
    },
    {
      id: 'uc415',
      floor: 4,
      room: 415,
      name: 'Network',
    },
    {
      id: 'uc420',
      floor: 4,
      room: 420,
      name: 'Experience Lab',
    },
    {
      id: 'uc425',
      floor: 4,
      room: 425,
      name: 'Pantry',
    },
    {
      id: 'uc431',
      floor: 4,
      room: 431,
      name: 'Moss',
    },
    {
      id: 'uc432',
      floor: 4,
      room: 432,
      name: 'Snow',
    },
    {
      id: 'uc433',
      floor: 4,
      room: 433,
      name: 'Mist',
    },
    {
      id: 'uc434',
      floor: 4,
      room: 434,
      name: 'Parents',
    },
    {
      id: 'uc435',
      floor: 4,
      room: 435,
      name: 'Utility Closet',
    },
    {
      id: 'uc440',
      floor: 4,
      room: 440,
      name: 'A/V Room',
    },
    {
      id: 'uc450',
      floor: 4,
      room: 450,
      name: 'Steel',
    },
    {
      id: 'uc460',
      floor: 4,
      room: 460,
      name: 'Pine',
    },
    {
      id: 'uc470',
      floor: 4,
      room: 470,
      name: 'Chrome',
    },
    {
      id: 'uc475',
      floor: 4,
      room: 475,
      name: 'Iron',
    },
    {
      id: 'uc480',
      floor: 4,
      room: 480,
      name: 'Bronze',
    },
    {
      id: 'uc485',
      floor: 4,
      room: 485,
      name: 'Copper',
    },
  ]
  .sort((a, b) => {
    // First sort by rooms that have room numbers
    // because they're better than the other rooms
    if (a.room && !b.room) {
      return -1;
    } else if (!a.room && b.room) {
      return 1;
    }

    // If both rooms have room numbers
    // sort alphabetically
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    } else {
      return -1;
    }
  });
}()
