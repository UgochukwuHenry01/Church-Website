
function toggleForm(formId) {
    const form = document.getElementById(formId);
    if (form.style.display === 'block') {
        form.style.display = 'none';
    } else {
        document.querySelectorAll('.form-container').forEach(f => f.style.display = 'none');
        form.style.display = 'block';
    }
}
