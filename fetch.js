// Fetch user data from the specified URL
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle errors gracefully, e.g., display an error message to the user
  }
}

// Sort users based on name and specified order
function sortUsers(users, order) {
  return users.sort((a, b) => {
    if (order === 1) {
      return a.name.localeCompare(b.name); // Ascending order
    } else {
      return b.name.localeCompare(a.name); // Descending order
    }
  });
}

// Filter users by name (case-insensitive)
function filterUsersByName(users, name) {
  return users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
}

// Display user data in a table (template provided)
// ... (No changes needed here)

// Initialize the app by fetching data and setting up event listeners
function initializeApp() {
  const tbody = document.querySelector('tbody');
  const sortBtn = document.querySelector('#sortBtn');
  const nameFilter = document.querySelector('#nameFilter');
  let currentOrder = 1; // Initial sorting order

  fetchData('https://jsonplaceholder.typicode.com/users')
    .then(users => {
      displayData(tbody, users);
    })
    .catch(error => {
      // Handle errors here
    });

  // Event listener for sorting
  sortBtn.addEventListener('click', () => {
    const displayedUsers = Array.from(tbody.querySelectorAll('tr')); // Get displayed users
    const users = displayedUsers.map(row => JSON.parse(row.dataset.user)); // Extract user data
    const sortedUsers = sortUsers(users, currentOrder);
    displayData(tbody, sortedUsers);
    currentOrder = -currentOrder; // Toggle sorting order
  });

  // Event listener for filtering
  nameFilter.addEventListener('input', () => {
    const displayedUsers = Array.from(tbody.querySelectorAll('tr'));
    const users = displayedUsers.map(row => JSON.parse(row.dataset.user));
    const filteredUsers = filterUsersByName(users, nameFilter.value);
    displayData(tbody, filteredUsers);
  });
}

initializeApp();
