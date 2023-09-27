document.getElementById('submit-button').addEventListener('click', function()
{
    const userEmailField = document.getElementById('user-email');
    const userEmailFieldValue = userEmailField.value;

    const userPasswordField = document.getElementById('user-password');
    const userPasswordFieldValue = userPasswordField.value;
    
    if (userEmailFieldValue == 'admin@email.com' && userPasswordFieldValue == 123456)
    {
        window.location.href = 'banking.html'
    }
    
})  