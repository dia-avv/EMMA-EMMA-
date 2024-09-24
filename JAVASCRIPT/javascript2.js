    document.querySelectorAll('.open-dialog').forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const dialogId = this.getAttribute('data-dialog');
                document.getElementById(dialogId).style.display = 'block';
                document.querySelector('.dialog-overlay').style.display = 'block';
            });
        });

        document.querySelectorAll('.close-btn').forEach(button => {
            button.addEventListener('click', function() {
                this.parentElement.style.display = 'none';
                document.querySelector('.dialog-overlay').style.display = 'none';
            });
        });

        document.querySelector('.dialog-overlay').addEventListener('click', function() {
            document.querySelectorAll('.dialog').forEach(dialog => {
                dialog.style.display = 'none';
            });
            this.style.display = 'none';
        });
