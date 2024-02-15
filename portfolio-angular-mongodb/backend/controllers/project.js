"use strict";

let Project = require("../models/project");
let fs = require("fs");
let path = require("path");
let exists = require("fs");

let controller = {
  home: function (req, res) {
    return res.status(200).send({
      message: "Soy la home del backend.",
    });
  },

  test: function (req, res) {
    return res.status(200).send({
      message: "Soy el método test del controlador de project.js backend.",
    });
  },

  saveProject: (req, res) => {
    let project = new Project();

    let params = req.body;
    //console.log(params);
    try {
      project.name = params.name;
      project.description = params.description;
      project.category = params.category;
      project.year = params.year;
      project.langs = params.langs;
      project.image = null;

      project.save();

      if (!project)
        return res
          .status(404)
          .send({ message: "No se ha podido guardar el project." });

      return res.status(200).send({
        message: "Project creado correctamente.",
        project,
      });
    } catch (err) {
      return res.status(500).send({
        message: "Error al guardar el project.",
      });
    }
  },

  getProject: (req, res) => {
    let projectId = req.params.id;
    //console.log(`findById ${projectId}`);
    if (projectId == null)
      return res.status(404).send({ message: "El proyecto no existe." });

    try {
      Project.findById(projectId).then((project) => {
        if (!project)
          return res.status(404).send({ message: "El proyecto no existe." });

        return res.status(200).json({
          message: "Project encontrado.",
          project,
        });
      });
    } catch (err) {
      return res.status(500).send({ message: "Error al devolver los datos." });
    }
  },

  getProjects: function (req, res) {
    try {
      Project.find({})
        .sort("-year")
        .then((projects) => {
          if (!projects)
            return res
              .status(404)
              .send({ message: "No hay projectos que mostrar." });

          return res.status(200).send({ projects });
        });
    } catch (err) {
      return res.status(500).send({ message: "Error al devolver los datos." });
    }
  },

  updateProject: function (req, res) {
    let projectId = req.params.id;
    let update = req.body;

    try {
      Project.findByIdAndUpdate(projectId, update, { new: true }).then(
        (projectUpdated) => {
          if (!projectUpdated) {
            return res
              .status(404)
              .send({ message: "No existe el proyecto para actualizar" });
          } else {
            return res.status(200).send({ project: projectUpdated });
          }
        }
      );
    } catch (err) {
      return res.status(500).send({ message: "Error al actualizar" });
    }
  },

  deleteProject: (req, res) => {
    let projectId = req.params.id;

    try {
      Project.findByIdAndRemove(projectId).then((projectRemoved) => {
        if (!projectRemoved)
          return res
            .status(404)
            .send({ message: "No se puede eliminar ese proyecto." });
        return res.status(200).send({
          project: projectRemoved,
        });
      });
    } catch (err) {
      return res
        .status(500)
        .send({ message: "No se ha podido borrar el proyecto" });
    }
  },

  uploadImage: function (req, res) {
    let projectId = req.params.id;
    let fileName = "Imagen no subida...";

    if (req.files) {
      let filePath = req.files.image.path;
      let fileSplit = filePath.split("\\");
      let fileName = fileSplit[1];
      let extSplit = fileName.split(".");
      let fileExt = extSplit[1];

      if (
        fileExt == "png" ||
        fileExt == "jpg" ||
        fileExt == "jpeg" ||
        fileExt == "gif"
      ) {
        try {
          Project.findByIdAndUpdate(
            projectId,
            { image: fileName },
            { new: true }
          ).then((projectUpdated) => {
            if (!projectUpdated) {
              return res.status(404).send({
                message: "El proyecto no existe y no se ha asignado la imagen",
              });
            } else {
              return res.status(200).send({ project: projectUpdated });
            }
          });
        } catch (err) {
          return res.status(500).send({ message: "La imagen no se ha subido" });
        }
      } else {
        fs.unlink(filePath, () => {
          return res.status(200).send({ message: "La extensión no es válida" });
        });
      }
    } else {
      return res.status(200).send({ message: fileName });
    }
  },

  getImageFile: (req, res) => {
    let file = req.params.image;
    let path_file = `./uploads/${file}`;

    //console.log(path_file);
    //Revisar el fs.exists deprecated 
    fs.exists(path_file , (exists) => {
      if(exists) {
        return res.sendFile(path.resolve(path_file)); 
      } else {
        return res.sendFile(path.resolve(path_file));
      }
    });
  },

};

module.exports = controller;
