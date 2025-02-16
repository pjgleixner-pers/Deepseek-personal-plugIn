import * as vscode from 'vscode';
import ollama from 'ollama';


export function activate(context: vscode.ExtensionContext) {

	const disposable = vscode.commands.registerCommand('fireship-ext.start', () => {
		const panel = vscode.window.createWebviewPanel(
			'deepChat',
			'Deep Seek Chat',
			vscode.ViewColumn.One,
			{enableScripts: true}
		)

		panel.webview.html = getWebViewContent()

		panel.webview.onDidReceiveMessage(async (message: any) => {
			if (message.command === 'caht'){
				const userPrompt = message.text
				let responseText = ''
			}
		})
		
	})

	context.subscriptions.push(disposable);
}

function getWebViewContent(): string {
	return /*html*/ `
	<!DOCTTYOE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<style>
			body { font-family: sans-serif; margin: 1rem; }
			#prompt {width: 100%; box-sizing: border-box;}
			#response {border: 1px solid #ccc; margin-top: 1rem; padding: 0.5rem; }
		</style>
	</head>
    <body>
        <h2>Deep VS Code Extension</h2>
        <textarea id="prompt" rows="3" placeholder="Ask something ..."></textarea><br />
        <button id="askBtn">Ask</button>
        <div id="Response"></div>

        <script>
            const vscode = acquireVsCodeApi();

            document.getElementById('askBtn').addEventListener('click', () => {
                const text = document.getElementById('prompt').value;
                vscode.postMessage({command: 'chat',text});
            });
        </script>
    </body>
    </html>
	`;
}

export function deactivate() {}
