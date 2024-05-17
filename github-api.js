const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
  auth: "t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" // Reemplaza con tu token de acceso personal
});

async function updateRepository(LeydiProgrammer, servidor, servidor) {
  try {
    const response = await octokit.repos.update({
      owner: LeydiProgrammer,
      repo: servidor,
      description: servidor
    });
    console.log("Repositorio actualizado:", response.data.html_url);
  } catch (error) {
    console.error("Error al actualizar el repositorio:", error.message);
  }
}

updateRepository("LeydiProgrammer", "servidor", "servidor");