<template>
  <div class="nDetail zc_auto" id="abc">
    <quill-editor v-model="docContent"
          ref="myQuillEditor"
          :options="editorOption"
          @blur="handleEditorBlur($event)"
          @focus="handleEditorFocus($event)"
          @change="handleEditorChange($event)">
    </quill-editor>
  </div>
</template>

<script>
export default {
	created(){
    window.scrollTo(0,420);
    // document.querySelector("#abc").scrollIntoView()
	},
  data () {
    return {
      editorOption: {
        placeholder: '',
        theme: 'snow',  // or 'bubble'
        modules: {
          toolbar: {
              container: [],  // 工具栏
              handlers: {
                  'image': function (value) {
                  if (value) {
                    document.querySelector('.avatar-uploader input').click()
                  } else {
                    this.quill.format('image', false);
                  }
                }
              }
          }
        }
      },
      handleInputChange () {},
      handleEditorBlur () {},
      handleEditorFocus () {},
      handleEditorChange (e) {
        /*this.textLen = e.text.length - 1;
        this.beyond = this.textLen - 350;
        if (this.textLen > 350) {
          this.info.evId = '';
        } else {
          this.info.evId = this.evList[0].evId;
        }*/
      },
      docContent:'<h1 class="ql-align-center"><strong class="ql-size-huge">&nbsp;&nbsp;南北朝: 作者介绍</strong></h1><p><br></p><p>&nbsp;&nbsp;唧唧复唧唧，木兰当户织。不闻机杼声，惟闻女叹息。问女何所思，问女何所忆。女亦无所思，女亦无所忆。昨夜见军帖，可汗大点兵，军书十二卷，卷卷有爷名。阿爷无大儿，木兰无长兄，愿为市鞍马，从此替爷征。</p><p>&nbsp;&nbsp;东市买骏马，西市买鞍鞯，南市买辔头，北市买长鞭。旦辞爷娘去，暮宿黄河边，不闻爷娘唤女声，但闻黄河流水鸣溅溅。旦辞黄河去，暮至黑山头，不闻爷娘唤女声，但闻燕山胡骑鸣啾啾。</p><p><br></p><p>&nbsp;&nbsp;万里赴戎机，关山度若飞。朔气传金柝，寒光照铁衣。将军百战死，壮士十年归。</p><p><br></p><p>&nbsp;&nbsp;归来见天子，天子坐明堂。策勋十二转，赏赐百千强。可汗问所欲，木兰不用尚书郎，愿驰千里足，送儿还故乡。</p><p><br></p><p>&nbsp;&nbsp;爷娘闻女来，出郭相扶将；阿姊闻妹来，当户理红妆；小弟闻姊来，磨刀霍霍向猪羊。开我东阁门，坐我西阁床，脱我战时袍，著我旧时裳。当窗理云鬓，对镜帖花黄。出门看火伴，火伴皆惊忙：同行十二年，不知木兰是女郎。</p><p><br></p><p>&nbsp;&nbsp;雄兔脚扑朔，雌兔眼迷离；双兔傍地走，安能辨我是雄雌？</p><p><br></p><p>&nbsp;&nbsp;译文</p><p><br></p><p>&nbsp;&nbsp;叹息声一声接着一声传出，木兰对着房门织布。听不见织布机织布的声音，只听见木兰在叹息。问木兰在想什么？问木兰在惦记什么？我也没有在想什么，也没有在惦记什么。</p><p><br></p><p>&nbsp;&nbsp;昨晚看到了征兵文件，知道君主正在大规模招募，因此许多应征入伍者都在每卷上都有父亲的名字。父亲没有大儿子，花木兰没有兄弟，花木兰愿意去市场买马鞍和马，并开始替换父亲去打。</p><p><br></p><p>&nbsp;&nbsp;在市场上到处买马。第二天早上我离开了父母，晚上在黄河上露营。我听不到父母给我女儿打电话的声音。我只能听到黄河的声音。第二天早上，我在路上离开黄河，晚上到达黑山。我听不到父母为我女儿的声音。我只能听到燕山胡兵战马的啾啾的鸣叫声。</p><p><br></p><p>&nbsp;&nbsp;不远处，我去了战场，山峰和飞行一样快。北方的寒冷发出响亮的声音，月光反射出士兵的盔甲。这些士兵经历了数百场战斗，有些人为国家牺牲了生命，有些人已经多年重返胜利。</p><p><br></p><p>&nbsp;&nbsp;胜利回来看皇帝，皇帝坐在寺庙里（优点）。给木兰花一个伟大的壮举，并且有超过一千个奖励。皇帝问木兰有什么要求，木兰说他不会做尚书郎，并希望骑千里并返回家乡。</p><p><br></p><p>&nbsp;&nbsp;父母听说他们的女儿回来后互相帮助她在城外见面。我的姐姐听说她的妹妹已经回来并打扮到门户网站。弟弟听说她姐姐已经回来了，正忙着砸刀杀猪并屠杀羊。</p><p><br></p><p>&nbsp;&nbsp;每间房都打开了门进去看看，脱去打仗时穿的战袍，穿上以前女孩子的衣裳，当着窗子、对着镜子整理漂亮的头发，对着镜子在面部贴上装饰物。走出去看一起打仗的火伴，火伴们很吃惊，同行数年之久，竟然不知木兰是女孩。</p><p><br></p><p>&nbsp;&nbsp;雄兔两只前脚时时动弹、雌兔两只眼睛时常眯着，所以容易分辨。雄雌两兔一起并排跑，怎能分辨哪个是雄兔哪个是雌兔呢？</p><p><br></p><p>&nbsp;&nbsp;注释：</p><p><br></p><p>&nbsp;&nbsp;1、唧唧：纺织机的声音。一说为叹息声，意思是木兰无心织布，停机叹息。</p><p><br></p><p>&nbsp;&nbsp;2、当户：对着门。</p><p><br></p><p>&nbsp;&nbsp;3、机杼声：织布机发出的声音。机：指织布机。杼：织布梭（suō）子。</p><p><br></p><p>&nbsp;&nbsp;4、惟：只。</p><p><br></p><p>&nbsp;&nbsp;5、何：什么。</p><p><br></p><p>&nbsp;&nbsp;6、忆：思念，惦记</p><p><br></p><p>&nbsp;&nbsp;7、军帖：征兵的文书。</p><p><br></p><p>&nbsp;&nbsp;8、可汗：古代西北地区民族对君主的称呼</p><p><br></p><p>&nbsp;&nbsp;9、军书十二卷：征兵的名册很多卷。十二，表示很多，不是确指。下文的“十二转”、“十二</p><p><br></p><p>&nbsp;&nbsp;10、胡骑：胡人的战马。胡，古代对北方少数民族的称呼。</p><p><br></p><p>&nbsp;&nbsp;11、啾啾：马叫的声音。</p><p><br></p><p>&nbsp;&nbsp;《木兰诗》是一首北朝民歌，宋郭茂倩《乐府诗集》归入《横吹曲辞·梁鼓角横吹曲》中。这是一首长篇叙事诗，讲述了一个叫木兰的女孩，女扮男装，替父从军，在战场上建立功勋，回朝后不愿作官，只求回家团聚的故事，热情赞扬了这位女子勇敢善良的品质、保家卫国的热情和英勇无畏的精神。</p><p><br></p><p>&nbsp;&nbsp;全诗以“木兰是女郎”来构思木兰的传奇故事，富有浪漫色彩；详略安排极具匠心，虽然写的是战争题材，但着墨较多的却是生活场景和儿女情态，富有生活气息；以人物问答及铺陈、排比、对偶、互文等手法描述人物情态，刻画人物心理，生动细致，神气跃然，使作品具有强烈的艺术感染力。</p><p><br></p><p>&nbsp;&nbsp;向左转|向右转</p><p><br></p><p><br></p><p>&nbsp;&nbsp;扩展资料:</p><p><br></p><p>&nbsp;&nbsp;创作背景：</p><p><br></p><p>&nbsp;&nbsp;《木兰诗》产生的时代众说纷纭，但据其最早著录于陈释智匠所撰的《古今乐录》，可证其产生之时代不晚于陈。诗中称天子为“可汗”，征战地点皆在北方，则其产生之地域在北朝。黑山即杀虎山，在今内蒙古呼和浩特市东南，去黄河不远。</p><p><br></p><p>&nbsp;&nbsp;燕山指燕然山，即今蒙古人民共和国杭爱山。据此，《木兰诗》中之战事，当发生于北魏与柔然之间。柔然是北方游牧族大国，立国一百五十八年间，与北魏及东魏、北齐曾发生过多次战争。而最主要之战场，正是黑山、燕然山一带。</p><p><br></p><p>&nbsp;&nbsp;北魏时期，北方游牧民族柔然族不断南下骚扰，北魏政权规定每家出一名男子上前线。但是木兰的父亲年事已高又体弱多病，无法上战场，家中弟弟年龄尚幼，所以，木兰决定替父从军，从此开始了她长达十几年的军旅生活。</p>'
    }
  },
  methods:{
  }
}
</script>

<style>
  .ql-toolbar{
    display:none;
  }
  .ql-container.ql-snow{
    border: none !important;
  }
</style>
<style scoped>
  .nDetail{
    padding: 30px 0;
  }
</style>
