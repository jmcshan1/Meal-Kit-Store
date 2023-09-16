// Style Form Prevent Blank Submission
console.log('HomePage FOrm Selector Control Loaded');
document.querySelector('.style-form').addEventListener('submit', (event) => {
  const styleInput = document.querySelector('.style');
  if(styleInput.value === '') {
    event.preventDefault();
    alert('Please enter a style');
  }
});

//Protein Form Prevent Blank Submission
document.querySelector('.protein-form').addEventListener('submit', (event) => {
  console.log('HomePage FOrm Selector Control line 13');
  const proteinInput = document.querySelector('.protein');
  if(proteinInput.value === '') {
    event.preventDefault();
    alert('Please enter a protein');
  }
});
console.log('HomePage FOrm Selector Control Loaded');