const apiUrl = 'https://api.adviceslip.com/advice';

async function fetchAffirmation() {
  try {
    const response = await fetch(apiUrl, {
        headers: {
          'Accept': 'application/json'
        }
      });
    if (!response.ok) {
      throw new Error('Failed to fetch affirmation');
    }
    const data = await response.json();
    const affirmationText = document.getElementById('affirmationText');
    affirmationText.textContent = data.slip.advice
  } catch (error) {
    console.error('Error fetching affirmation:', error);
    return 'Failed to fetch affirmation. Please try again later.';
  }
}
fetchAffirmation()