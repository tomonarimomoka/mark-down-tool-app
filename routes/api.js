var express = require('express');
var router = express.Router();

const MarkdownIt = require('markdown-it');
const markdown  = new MarkdownIt();

const ps = require('@prisma/client');
const prisma = new ps.PrismaClient();

//ログインチェック
function check(req,res){
    if(req.session.login == undefined){
        req.session.back = '/';
        return true;
    }else{
        return false;
    }
}

router.get('/check',function(req,res,next){
    if(check(req,res)){
        res.json({result:false});
    }else{
        res.json({result:req.session.login.name});
    }
});
