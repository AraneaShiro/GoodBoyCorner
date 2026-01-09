
class Quest{

    function createQuest(Title,Description,Token,End){
        this.title=Title
        this.Description=Description
        this.Reward=false
        this.NbToken=Token
        this.EndDay=End
    }

    constructor (Title,Description,RewardTitle,RewardDescription,End){
        this.title=Title
        this.Description=Description
        this.Reward=true
        this.RewardTitle=RewardTitle
        this.RewardDescription=RewardDescription
        this.EndDay=End
    }


}