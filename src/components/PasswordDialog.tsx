import '../style.css';
import '../workDetailPage/style_works.css';
import '../font.css';

export default function PasswordDialog (
) {
document.addEventListener('DOMContentLoaded', function () {
    const protectedContentButton = document.getElementById('protectedContentButton') as HTMLButtonElement;
    const dialogOverlay = document.getElementById('dialogOverlay') as HTMLDivElement;
    const submitPasswordButton = document.getElementById('submitPasswordButton') as HTMLButtonElement;
    const passwordInput = document.getElementById('passwordInput') as HTMLInputElement;
    const protectedContent = document.getElementById('protectedContent') as HTMLDivElement;

    const correctPassword = 'password123';
  
    protectedContentButton.addEventListener('click', function () {
      dialogOverlay.style.display = 'flex';
    });
  
    submitPasswordButton.addEventListener('click', function () {
      const inputPassword = passwordInput.value;
      if (inputPassword === correctPassword) {
        protectedContent.style.display = 'block';
        dialogOverlay.style.display = 'none';
      } else {
        alert('Incorrect password. Please try again.');
      }
      passwordInput.value = ''; // Clear the input field after submission
    });
  
    dialogOverlay.addEventListener('click', function (event: MouseEvent) {
      if (event.target === dialogOverlay) {
        dialogOverlay.style.display = 'none';
      }
    });
  });
}
