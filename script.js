document.addEventListener('DOMContentLoaded', () => {
    const copyIpBtn = document.getElementById('copyIpBtn');
    const serverIp = 'gears-n-tears.modrinth.gg'; 

    copyIpBtn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(serverIp);
            
            const originalHTML = copyIpBtn.innerHTML;
            // Mostra l'ingranaggio che gira e la conferma
            copyIpBtn.innerHTML = '<span class="inline-block animate-spin-slow">⚙️</span> IP Copiato!';
            
            copyIpBtn.classList.replace('bg-brass', 'bg-geargreen');
            copyIpBtn.classList.replace('border-brass-dark', 'border-geargreen-dark');
            copyIpBtn.classList.replace('hover:bg-brass-dark', 'hover:bg-geargreen-dark');
            
            setTimeout(() => {
                copyIpBtn.innerHTML = originalHTML;
                copyIpBtn.classList.replace('bg-geargreen', 'bg-brass');
                copyIpBtn.classList.replace('border-geargreen-dark', 'border-brass-dark');
                copyIpBtn.classList.replace('hover:bg-geargreen-dark', 'hover:bg-brass-dark');
            }, 2000);
            
        } catch (err) {
            console.error('Errore durante la copia: ', err);
            copyIpBtn.innerHTML = '🔧 Errore di copia';
        }
    });
});
