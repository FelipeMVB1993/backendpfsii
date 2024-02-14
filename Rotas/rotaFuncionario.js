import { Router } from "express";
import FuncionarioCtrl from "../Controle/funcionarioCtrl.js";

const prodCtrl = new FuncionarioCtrl();
const rotaProduto = new Router();

rotaProduto
.get('/', prodCtrl.consultar)
.get('/:termo', prodCtrl.consultar)
.post('/', prodCtrl.gravar)
.patch('/', prodCtrl.atualizar)
.put('/', prodCtrl.atualizar)
.delete('/', prodCtrl.excluir);

export default rotaProduto;