const MainModel = require(__path_schemas + 'chapter')

module.exports ={
    listItems:(params,option)=>{
        if(option.task === 'all'){
            return MainModel
                .find({})
                .select('id maTruyen tapSo ten ngayDang noiDung')
        }
        else if(option.task === 'one')
            return MainModel
                .find({id:params.id})
                .select('id maTruyen tapSo ten ngayDang noiDung')
        else if(option.task === 'truyen')
            return MainModel
                .find({maTruyen:params.id})
                .select('id maTruyen tapSo ten ngayDang noiDung')
    },
    deleteItems:(params,option)=>{
        if(option.task === "one")
            return MainModel
                .deleteOne({id:params.id})
    },
    editItem:(params,option)=>{
        if(option.task === "edit")
            return MainModel
                .updateOne({id:params.id},params.body)
    },
    create: (item) =>{
        return new MainModel(item).save()
    }
}