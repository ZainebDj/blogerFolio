In diesem Projekt gibt es die Möglichkeit, sich zu registrieren und anschließend anzumelden. Beim Login gibt es verschiedene Bedingungen, die sich nach der Rolle des Benutzers richten. Wenn ein Benutzer die Rolle "Admin" hat, hat er Zugriff auf die Benutzertabelle und kann sie bearbeiten oder löschen. Es gibt auch Benutzer, die lediglich Zugriff auf die Anzeige der Tabelle haben, ohne Änderungen vornehmen zu können. Schließlich gibt es Benutzer, die keinen Zugriff haben, um die Daten anzuzeigen.

Eine alternative Herangehensweise an die Implementierung dieser Funktionen könnte folgendermaßen aussehen:

1. Registrierung:
   - Der Benutzer gibt seine Registrierungsdaten ein, einschließlich Benutzername, Passwort, Geburstdatum, 	Geschlecht und ihre Ausbildung.
   - Die eingegebenen Daten werden an den json Server gesendet und in der Benutzerdatenbank gespeichert.

2. Anmeldung:
   - Der Benutzer gibt seinen Benutzerid und sein Passwort ein.
   - Die eingegebenen Daten werden an den Server gesendet und überprüft, ob sie mit den gespeicherten 	Benutzerdaten übereinstimmen.
   - Wenn die Anmeldedaten korrekt sind, wird der Benutzer eingeloggt und auf die entsprechende Seite 	weitergeleitet, abhängig von seiner Rolle.

3. Benutzerrollen :
   - Basierend auf der Benutzerrolle werden bestimmte Funktionen und Seiten zugänglich gemacht oder eingeschränkt.
   - Nur benutzerrolle 'Admin' kontroliert wer hat Zugriff die Data zu zeigen

4. Fehlerbehandlung:
   - Bei Fehlern während des Registrierungs- oder Anmeldevorgangs sollten entsprechende Fehlermeldungen angezeigt 	werden, um den Benutzer zu informieren.
   - Zum Beispiel, wenn die Anmeldedaten nicht korrekt sind oder der Benutzer nicht über die erforderlichen 	Berechtigungen verfügt, sollte eine Fehlermeldung angezeigt werden.

Es ist wichtig, eine solide und sichere Authentifizierungs- und Autorisierungslogik zu implementieren, um die Integrität der Anwendung und die Privatsphäre der Benutzerdaten zu gewährleisten. Die genaue Implementierung hängt von den verwendeten Technologien und Frameworks ab, aber die oben beschriebenen Schritte bieten eine allgemeine Vorstellung von der Vorgehensweise.

Ich habe benutzt Angular als Framework (include angular material) und db.json als Fake API.