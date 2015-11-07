<?php
use yii\helpers\Html;
use yii\widgets\ActiveForm;
use \frontend\modules\user\models\LoginForm;
/* @var $this \yii\web\View */
/* @var $content string */
/* @var $form yii\widgets\ActiveForm */
/* @var $model \frontend\modules\user\models\LoginForm */

$model = new LoginForm();


\frontend\assets\FrontendAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?php echo Yii::$app->language ?>">
<head>
    <meta charset="<?php echo Yii::$app->charset ?>"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php echo Html::encode($this->title) ?></title>
    <?php $this->head() ?>
    <?php echo Html::csrfMetaTags() ?>
</head>
<body>
<?php $this->beginBody() ?>
<link href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,600" rel=stylesheet type=text/css>
<link href=http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css rel=stylesheet type=text/css>
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r72/three.min.js"></script>

<div id=bodyWrapper class=body-wrapper>
      <nav id=menu class="menu">
        <ul>
            <li id=creditsAnchor><span>Credits</span></li>
            <li id=contactAnchor><span>Contact</span></li>
            <li id=aboutAnchor><span>About</span></li>
            <li id=galleryAnchor><span>Portfolio</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li id=homeAnchor class=active><span><b>RZR</b>.IO</span></li>
        </ul>
        <div id=menuItemActive class=item-active-bottom>
            <div class="menu-handler left"></div>
            <!--div class="menu-handler right"></div--></div>
    </nav>
    <!-- burguer menu and fullscreen nav -->
    <div id=burguerMenu class="burguer-container hide">
        <div id=burguerTitle class=burguer-title>::Home</div>
        <a id=trigger-overlay class=burger href=#><span></span></a></div>
    <div class=burguer-overlay>
        <nav>
            <ul>
                <li><a id=aboutBurguerItem href=#>About</a></li>
                <li><a id=galleryBurguerItem href=#>Portfolio</a></li>
                <li><a id=contactBurguerItem href=#>Contact</a></li>
                <li><a id=creditsBurguerItem href=#>Credits</a></li>
            </ul>
        </nav>
    </div>

    <!-- SECTION ABOUT START-->
    <section id=aboutSection class="section-content section-about hide">
        <div class=content-left>
            <div class=content-title><span>About</span></div>
            <div class=content-subtitle>Skills</div>
            <div class="rule right"></div>
            <span class=item>Blockchain</span> <span class=item>Financial Services</span> <span
                class=item>Enterprise</span></div>
        <div class=content-right>
            <div class=content-title><span class=highlight>US</span></div>
            <div class=content-info>
                <div class=content-subtitle>Who are We</div>
                <div class="rule left"></div>
                <span class=description>We research, develop, patent, and licence blockchain technology.</span></div>
            <div class=content-info>
                <div class=content-subtitle>What We Do</div>
                <div class="rule left"></div>
                <span class=description>Our current focus is to develop decentralized experiences for the web - including the worlds first blockchain OS. To achieve perfect balance between  delivery and performance is always a goal, and this site is addressing medium-high end enterprises.</span>
            </div>
            <div class=content-info>
                <div class=content-subtitle>What's Next</div>
                <div class="rule left"></div>
                <span class=description>DeOS is coming and we're looking forward to it! For the first time in decades we will have the opportunity to change how to surf the web. </span>
            </div>
        </div>
    </section>
    <!-- SECTION ABOUT END-->

    <!-- SECTION CONTACT START -->
    <section id=contactSection class="section-content section-contact hide">
        <div class=content-left>
            <div class=content-title><span class=highlight>get in</span></div>
        </div>
        <div class=content-right>
            <div class=content-info>
                <div class=content-title>touch</div>
                <div class="rule left"></div>
                <span class=description>If you have something to share with us, work related or otherwise please leave us a message - we will reply as soon as we can.</span>

                <div class="rule left"></div>
                <div class=content-subtitle><a href=../ourwhitepaper.pdf class=resume title="download resume"
                                               target=_blank>download whitepaper</a></div>
            </div>
            <div class="content-info content-social">
                <div class=content-title-fake></div>
                <div class=content-subtitle>social</div>
                <div class="rule left"></div>
                <div class=footer-social-links>
                    <a href=https://twitter.com/razormind title=Twitter target=_blank>
                        <i class="fa fa-twitter"></i></a>
                    <a href=https://www.behance.net/razormind title=Behance target=_blank>
                        <i class="fa fa-behance"></i></a>
                    <a href="https://linkedin.com/razormind/" title=LinkedIn target=_blank>
                        <i class="fa fa-linkedin"></i></a> <a href=https://soundcloud.com/jawadyaqub title=Soundcloud target=_blank><i class="fa fa-soundcloud"></i>
                    </a>
                    <!--a href="https://vimeo.com/user40758660" title="Vimeo" target="_blank"><i class="fa fa-vimeo-square"></i></a-->
                </div>
            </div>
            <div class=content-info>
                <div class=content-title-fake></div>
                <div class=content-subtitle>email</div>
                <div class="rule left"></div>
                <div class=content-subtitle><a class=email target=_blank href=mailto:hello@rzr.io>hello@rzr.io</a></div>
            </div>
            <div class=content-info>


            </div>
        </div>
        <br></section>
    <!-- SECTION CONTACT END -->

    <!--SECTION CREDITS START -->
    <section id=creditsSection class="section-content section-credits hide">
        <div class=content-left>
            <div class=content-subtitle>To all contributors</div>
            <div class="rule right"></div>
        </div>
        <div class=content-right>
            <div class=content-info-list>
                <div class=content-subtitle>Backers</div>
                <div class="rule left"></div>
                <ul class=credits-list>
                    <li><a class=anchor-link target=_blank href="http://www.blender.org/">HSBC</a></li>
                    <li><a class=anchor-link target=_blank href="http://www.makehuman.org/">GSI Fund</a></li>
                    <li><a class=anchor-link target=_blank href="http://meshlab.sourceforge.net/">Razormind Canada</a>
                    </li>
                    <li><a class=anchor-link target=_blank href="http://www.gimp.org/">Gimp</a></li>
                    <li><a class=anchor-link target=_blank href="http://audacity.sourceforge.net/">Cassandra</a></li>
                </ul>
            </div>
            <div class=content-info-list>
                <div class=content-subtitle>Partners</div>
                <div class="rule left"></div>
                <ul class=credits-list>
                    <li><a class=anchor-link target=_blank href="http://threejs.org/">ThreeJS</a></li>
                    <li><a class=anchor-link target=_blank href=https://github.com/desandro/classie>riskMethods</a></li>
                    <li><a class=anchor-link target=_blank href="https://github.com/mrdoob/stats.js/">Razormind
                            Dragon</a></li>
                    <li><a class=anchor-link target=_blank href="https://github.com/tweenjs/">Anthemis</a></li>
                    <li><a class=anchor-link target=_blank href="http://stereobit.github.io/dragend/">Eris
                            Industries</a></li>
                </ul>
            </div>
            <div class=content-info-list>
                <div class=content-subtitle>Communities</div>
                <div class="rule left"></div>
                <ul class=credits-list>
                    <li><a class=anchor-link target=_blank href="http://codepen.io/">Codepen</a></li>
                    <li><a class=anchor-link target=_blank href="http://tympanus.net/codrops/">Codrops</a></li>
                    <li><a class=anchor-link target=_blank href="http://blendernation.com/">BlenderNation</a></li>
                </ul>
            </div>
            <div class=content-info-list>
                <div class=content-subtitle>Special thanks</div>
                <div class="rule left"></div>
                <ul class=credits-list>
                    <li><a class=anchor-link target=_blank href=https://twitter.com/mrdoob>Ricardo Cabello</a></li>
                    <li><a class=anchor-link target=_blank href=https://twitter.com/alteredq>AlteredQualia</a></li>
                    <li><a class=anchor-link target=_blank href=https://twitter.com/thespite>Jaume Sánchez</a></li>
                </ul>
                <br><span class=description>For actually building.</span></div>
        </div>
    </section>
    <!--SECTION CREDITS END -->


    <?php echo $content ?>

    <!--FOOTER INFO START -->
    <footer id=footerInfoSection class="footer-section-info hide">
        <div id=footerTitle class=footer-title># Drag the mouse to rotate scene</div>
        <div id=shareSection class=share-section>share :: <a class=share-button
                                                             href="https://twitter.com/share?url=http://rzr.io&text=A realtime rendered WebGL Experiment"
                                                             title=Twitter target=_blank><i
                    class="fa fa-twitter"></i></a> <a class=share-button
                                                      href="https://www.facebook.com/sharer/sharer.php?u=http://rzr.io"
                                                      title=facebook target=_blank><i class="fa fa-facebook"></i></a> <a
                class=share-button href="https://plus.google.com/share?url='http://rzr.io/'" title=googlePlus
                target=_blank><i class="fa fa-google-plus"></i></a> <a class=share-button
                                                                       href="http://www.linkedin.com/shareArticle?mini=true&url=http://rzr.io&title=Razormind Network&summary=A realtime decentralized internet ready for VR"
                                                                       title=LinkedIn target=_blank><i
                    class="fa fa-linkedin"></i></a></div>
        <div id=settingsAnchor class=menu-settings>
            <div class=settings-label>:: <i id=audioIcon class="fa fa-volume-up" title=audio></i> :: settings</div>
            <img id=settingsIcon class=settings-icon src=/img/settings.svg></div>
    </footer>
    <!--FOOTER INFO END --></div><!-- BODY WRAPPER END --><!-- SHADERS --><!--
         The following shaders are courtesy of Jaume Sanchez
         http://www.clicktorelease.com/blog/creating-spherical-environment-mapping-shader
    -->


<!-- End Attracta Include 2015-06-19 20:56 -->
<?php $this->endBody() ?>

</body>
</html>
<?php $this->endPage() ?>
