# PokemonAPI

Grundet vi ikke kunne finde ud af, hvordan vi kunne oploade et angular projekt til Github, uden det ikke ville oploade vores src kode, så har vi valgt kun at oploade 
src kode mappen her på github, fordi man kan overwrite src i et angular projekt, og den så stadigvæk vil få alle vores ændringer med.

trin for at loade vores program:

1. download koden som ZIP
2. unZIP koden, også kopier koden
3. Lav et nyt Angular projekt
3A. Sikker dig, du har Node.js på din computer, og har downloadet angular igennem din terminal. Hvis du ikke har, kan du downloade angular med følgende kommand: 
npm install -g @angular/cli

3B. Oprette en ny angular fil med følgende kommand: 
ng new Projekt-name
Hvis du for en fejl besked der ser sådan her ud
"
ng : File C:\AppData\Roaming\npm\ng.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
At line:1 char:1
+ ng new pokemon
+ ~~
    + CategoryInfo          : SecurityError: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
"
så åben powershell admin og skriv følgende kommand 
"
Set-ExecutionPolicy RemoteSigned
"
4. Når du har fået oprettet angular projektet, så tag du den kopieret src kode, fra githuben og overskriver den src fil, du har oprettet i dit nye projekt. 
5. for at køre koden, og oprettet et lokalhost, skal du skrive 
"
ng serve
"
i din terminal.
