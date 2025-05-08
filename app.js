document.getElementById('shareButton').addEventListener('click', async () => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: document.title,
                text: 'Découvrez cet article incroyable !',
                url: window.location.href
            });
            console.log('Partage réussi');
        } catch (err) {
            console.error('Échec du partage:', err);
        }
    } else {
        alert('Le partage n\'est pas pris en charge par votre navigateur.');
    }
});