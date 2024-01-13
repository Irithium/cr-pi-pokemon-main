export const validate = (name, value) => {
  let errors = {};
  if (name === "name") {
    if (!value) {
      errors.name = "El nombre es obligatorio.";
    } else if (/[^a-zA-Z ]/.test(value)) {
      errors.name = "El nombre solo puede contener letras.";
    } else if (value.length < 3 || value.length >= 30) {
      errors.name =
        "El nombre debe tener al menos 3 caracteres o no ser mayor a 30.";
    }
  }
  if (name === "hp") {
    if (!value) {
      errors.hp = "Hp es obligatorio";
    } else if (!/^[0-9]+$/.test(value)) {
      errors.hp = "Hp debe ser un número entero.";
    } else if (value > 255) {
      errors.hp = "No puede ser mayor a 255";
    } else if (value < 0) {
      errors.hp = "No puede ser menor a 0";
    }
  }
  if (name === "attack") {
    if (!value) {
      errors.attack = "Ataque es obligatorio";
    } else if (!/^[0-9]+$/.test(value)) {
      errors.attack = "Ataque debe ser un número entero.";
    } else if (value > 255) {
      errors.attack = "No puede ser mayor a 255";
    } else if (value < 0) {
      errors.attack = "No puede ser menor a 0";
    }
  }
  if (name === "defense") {
    if (!value) {
      errors.defense = "Defensa es obligatorio";
    } else if (!/^[0-9]+$/.test(value)) {
      errors.defense = "Defensa debe ser un número entero.";
    } else if (value > 255) {
      errors.defense = "No puede ser mayor a 255";
    } else if (value < 0) {
      errors.defense = "No puede ser menor a 0";
    }
  }
  if (name === "spAttack") {
    if (!value) {
      errors.spAttack = "Ataque especial es obligatorio";
    } else if (!/^[0-9]+$/.test(value)) {
      errors.spAttack = "Ataque especial debe ser un número entero.";
    } else if (value > 255) {
      errors.spAttack = "No puede ser mayor a 255";
    } else if (value < 0) {
      errors.spAttack = "No puede ser menor a 0";
    }
  }
  if (name === "spDefense") {
    if (!value) {
      errors.spDefense = "Defensa especial es obligatorio";
    } else if (!/^[0-9]+$/.test(value)) {
      errors.spDefense = "Defensa especial debe ser un número entero.";
    } else if (value > 255) {
      errors.spDefense = "No puede ser mayor a 255";
    } else if (value < 0) {
      errors.spDefense = "No puede ser menor a 0";
    }
  }
  if (name === "speed") {
    if (!value) {
      errors.speed = "Velocidad es obligatorio";
    } else if (!/^[0-9]+$/.test(value)) {
      errors.speed = "Velocidad debe ser un número entero.";
    } else if (value > 255) {
      errors.speed = "No puede ser mayor a 255";
    } else if (value < 0) {
      errors.speed = "No puede ser menor a 0";
    }
  }
  if (name === "height") {
    if (!value) {
      errors.height = "Altura es obligatorio";
    } else if (!/^[0-9]+$/.test(value)) {
      errors.height = "Altura debe ser un número entero.";
    }
  }
  if (name === "weight") {
    if (!value) {
      errors.weight = "weight es obligatorio";
    } else if (!/^[0-9]+$/.test(value)) {
      errors.weight = "weight debe ser un número entero.";
    } else if (value > 999) {
      errors.speed = "No puede ser mayor a 999";
    }
  }

  if (name === "image") {
    if (!value) {
      errors.image = "Es obligatorio que tenga imagen";
    }
  }

  if (name === "id") {
    if (
      value &&
      !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
        value
      )
    )
      errors.id = "Debe ser un UUID";
  }

  return errors;
};
