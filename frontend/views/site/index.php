<?php
use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $form yii\widgets\ActiveForm */
/* @var $model \frontend\modules\user\models\LoginForm */
$this->title = "rzr.io"
?>


<!--SECTION GALEERY START -->
<section id=gallerySection class=section-gallery>
    <div class=diagonal-overlay-right></div>
    <div id=thumbContainer class=gallery-thumb-container>
        <div class=thumb-wrapper>
            <a data-model=1 class="gallery-thumb active"><span class=thumb-date>DeOS.01</span></a>
            <a data-model=2 class=gallery-thumb><span class=thumb-date>Frame.02</span></a>
            <a data-model=3 class=gallery-thumb><span class=thumb-date>Frame.03</span></a>
            <a data-model=4 class=gallery-thumb><span class=thumb-date>Frame.04</span></a>
            <a data-model=5 class=gallery-thumb><span class=thumb-date>Frame.05</span></a>
            <a data-model=6 class=gallery-thumb><span class=thumb-date>Frame.06</span></a>
            <a data-model=7 class=gallery-thumb><span class=thumb-date>Frame.07</span></a>
            <a data-model=8 class=gallery-thumb><span class=thumb-date>Frame.08</span></a>
            <a data-model=9 class=gallery-thumb><span class=thumb-date>Frame.09</span></a>
        </div>
        <div id=thumbOverlay class="thumb-overlay pos1"></div>
    </div>
    <div id=touchSwipeInfo class=touch-swipe-info>
        <div class=content-subtitle># Swipe screen to navigate</div>
    </div>
    <div id=galleryContainer class=gallery-item-container>
        <ul>
            <li class=gallery-item>
                <div class=model-info-wrapper>
                    <picture class="model-background-img hide">
                        <source media="(min-width: 500px)" srcset=/img/backgroundScene1HD.jpg>
                        <source srcset=/img/backgroundScene1SD.jpg>
                        <img src=/img/backgroundScene1HD.jpg class=model-background-img alt=""></picture>
                    <div class=diagonal-overlay-down></div>
                    <div class=diagonal-overlay-left></div>
                    <div class="section-content gallery-content">
                        <div class=content-left>
                            <div class=content-title>
                                <span>DeOS</span>
                                <span class="frame-number highlight">1</span>
                            </div>
                            <div class=assets-info>
                                <div class=current-info>

                                    <?php $form = ActiveForm::begin(['id' => 'login-form', 'class' => 'form']); ?>


                                    <span class=settings-name><?php echo $form->field($model, 'identity') ?></span>
                                    <span
                                        class=settings-name><?php echo $form->field($model, 'password')->passwordInput() ?></span>
                                    <span
                                        class=settings-name><?php echo Html::submitButton(Yii::t('frontend', 'Login'), ['id' => 'login-button', 'name' => 'login-button', 'class' => 'button button-load load-video', 'data-model' => '1']) ?></span>
                                    <?php ActiveForm::end(); ?>

                                </div>
                                <div class="loader"><i class="loader__tile loader__tile__1"></i><i
                                        class="loader__tile loader__tile__2"></i><i
                                        class="loader__tile loader__tile__3"></i><i
                                        class="loader__tile loader__tile__4"></i><i
                                        class="loader__tile loader__tile__5"></i><i
                                        class="loader__tile loader__tile__6"></i><i
                                        class="loader__tile loader__tile__7"></i><i
                                        class="loader__tile loader__tile__8"></i><i
                                        class="loader__tile loader__tile__9"></i></div>
                            </div>
                            <div class=assets-info>
                                <div class="rule right"></div>
                                <div class=current-info>
                                    <button data-model=1 data-assets=4 class="button button-load load-webgl">Login
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class=gallery-item>
                <div class=model-info-wrapper>
                    <picture class=model-background-img>
                        <source media="(min-width: 500px)" srcset=/img/backgroundScene2HD.jpg>
                        <source srcset=/img/backgroundScene2SD.jpg>
                        <img src=/img/backgroundScene2HD.jpg class=model-background-img alt=""></picture>
                    <div class=diagonal-overlay-down></div>
                    <div class=diagonal-overlay-left></div>
                    <div class="section-content gallery-content">
                        <div class=content-left>
                            <div class=content-title><span>Frame</span> <span
                                    class="frame-number highlight">2</span></div>
                            <div class=assets-info>
                                <div class=current-info><span class=settings-name>Date</span><span
                                        class=assets-label>11.03.15</span> <span
                                        class=settings-name>Assets Size</span><span class=assets-label>3.4Mb</span>
                                    <span class=settings-name>#polygons</span><span class=assets-label>12.352</span>
                                </div>
                            </div>
                            <div class=assets-info>
                                <div class="rule right"></div>
                                <div class=current-info>
                                    <button data-model=2 data-assets=6 class="button button-load load-webgl">View
                                    </button>
                                    <button data-model=2 class="button button-load load-video">View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class=gallery-item>
                <div class=model-info-wrapper>
                    <picture class=model-background-img>
                        <source media="(min-width: 500px)" srcset=/img/backgroundScene3HD.jpg>
                        <source srcset=/img/backgroundScene3SD.jpg>
                        <img src=/img/backgroundScene3HD.jpg class=model-background-img alt=""></picture>
                    <div class=diagonal-overlay-down></div>
                    <div class=diagonal-overlay-left></div>
                    <div class="section-content gallery-content">
                        <div class=content-left>
                            <div class=content-title><span>Frame</span> <span
                                    class="frame-number highlight">3</span></div>
                            <div class=assets-info>
                                <div class=current-info><span class=settings-name>Date</span><span
                                        class=assets-label>13.03.15</span> <span
                                        class=settings-name>Assets Size</span><span class=assets-label>3.2Mb</span>
                                    <span class=settings-name>#polygons</span><span class=assets-label>12.790</span>
                                </div>
                            </div>
                            <div class=assets-info>
                                <div class="rule right"></div>
                                <div class=current-info>
                                    <button data-model=3 data-assets=6 class="button button-load load-webgl">View
                                    </button>
                                    <button data-model=3 class="button button-load load-video">View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class=gallery-item>
                <div class=model-info-wrapper>
                    <picture class=model-background-img>
                        <source media="(min-width: 500px)" srcset=/img/backgroundScene4HD.jpg>
                        <source srcset=/img/backgroundScene4SD.jpg>
                        <img src=/img/backgroundScene4HD.jpg class=model-background-img alt=""></picture>
                    <div class=diagonal-overlay-down></div>
                    <div class=diagonal-overlay-left></div>
                    <div class="section-content gallery-content">
                        <div class=content-left>
                            <div class=content-title><span>Frame</span> <span
                                    class="frame-number highlight">4</span></div>
                            <div class=assets-info>
                                <div class=current-info><span class=settings-name>Date</span><span
                                        class=assets-label>10.04.15</span> <span
                                        class=settings-name>Assets Size</span><span class=assets-label>1.7Mb</span>
                                    <span class=settings-name>#polygons</span><span class=assets-label>11.853</span>
                                </div>
                            </div>
                            <div class=assets-info>
                                <div class="rule right"></div>
                                <div class=current-info>
                                    <button data-model=4 data-assets=21 class="button button-load load-webgl">View
                                    </button>
                                    <button data-model=4 class="button button-load load-video">View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class=gallery-item>
                <div class=model-info-wrapper>
                    <picture class=model-background-img>
                        <source media="(min-width: 500px)" srcset=/img/backgroundScene5HD.jpg>
                        <source srcset=/img/backgroundScene5SD.jpg>
                        <img src=/img/backgroundScene5HD.jpg class=model-background-img alt=""></picture>
                    <div class=diagonal-overlay-down></div>
                    <div class=diagonal-overlay-left></div>
                    <div class="section-content gallery-content">
                        <div class=content-left>
                            <div class=content-title><span>Frame</span> <span
                                    class="frame-number highlight">5</span></div>
                            <div class=assets-info>
                                <div class=current-info><span class=settings-name>Date</span><span
                                        class=assets-label>25.04.15</span> <span
                                        class=settings-name>Assets Size</span><span class=assets-label>2.3Mb</span>
                                    <span class=settings-name>#polygons</span><span class=assets-label>11.631</span>
                                </div>
                            </div>
                            <div class=assets-info>
                                <div class="rule right"></div>
                                <div class=current-info>
                                    <button data-model=5 data-assets=62 class="button button-load load-webgl">View
                                    </button>
                                    <button data-model=5 class="button button-load load-video">View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class=gallery-item>
                <div class=model-info-wrapper>
                    <picture class=model-background-img>
                        <source media="(min-width: 500px)" srcset=/img/backgroundScene6HD.jpg>
                        <source srcset=/img/backgroundScene6SD.jpg>
                        <img src=/img/backgroundScene6HD.jpg class=model-background-img alt=""></picture>
                    <div class=diagonal-overlay-down></div>
                    <div class=diagonal-overlay-left></div>
                    <div class="section-content gallery-content">
                        <div class=content-left>
                            <div class=content-title><span>Frame</span> <span
                                    class="frame-number highlight">6</span></div>
                            <div class=assets-info>
                                <div class=current-info><span class=settings-name>Date</span><span
                                        class=assets-label>30.04.15</span> <span
                                        class=settings-name>Assets Size</span><span class=assets-label>2.9Mb</span>
                                    <span class=settings-name>#polygons</span><span class=assets-label>11.932</span>
                                </div>
                            </div>
                            <div class=assets-info>
                                <div class="rule right"></div>
                                <div class=current-info>
                                    <button data-model=6 data-assets=7 class="button button-load load-webgl">View
                                    </button>
                                    <button data-model=6 class="button button-load load-video">View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class=gallery-item>
                <div class=model-info-wrapper>
                    <picture class=model-background-img>
                        <source media="(min-width: 500px)" srcset=/img/backgroundScene7HD.jpg>
                        <source srcset=/img/backgroundScene7SD.jpg>
                        <img src=/img/backgroundScene7HD.jpg class=model-background-img alt=""></picture>
                    <div class=diagonal-overlay-down></div>
                    <div class=diagonal-overlay-left></div>
                    <div class="section-content gallery-content">
                        <div class=content-left>
                            <div class=content-title><span>Frame</span> <span
                                    class="frame-number highlight">7</span></div>
                            <div class=assets-info>
                                <div class=current-info><span class=settings-name>Date</span><span
                                        class=assets-label>01.05.15</span> <span
                                        class=settings-name>Assets Size</span><span class=assets-label>4.7Mb</span>
                                    <span class=settings-name>#polygons</span><span class=assets-label>23.896</span>
                                </div>
                                <div class="rule right"></div>
                                <div class=credits-subtitle>Head mesh and texture are courtesy of <a
                                        class=hover-anchor href="http://www.ten24.info/" target=_blank>Ten24</a>.
                                </div>
                            </div>
                            <div class=assets-info>
                                <div class="rule right"></div>
                                <div class=current-info>
                                    <button data-model=7 data-assets=4 class="button button-load load-webgl">View
                                    </button>
                                    <button data-model=7 class="button button-load load-video">View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class=gallery-item>
                <div class=model-info-wrapper>
                    <picture class=model-background-img>
                        <source media="(min-width: 500px)" srcset=/img/backgroundScene8HD.jpg>
                        <source srcset=/img/backgroundScene8SD.jpg>
                        <img src=/img/backgroundScene8HD.jpg class=model-background-img alt=""></picture>
                    <div class=diagonal-overlay-down></div>
                    <div class=diagonal-overlay-left></div>
                    <div class="section-content gallery-content">
                        <div class=content-left>
                            <div class=content-title><span>Frame</span> <span
                                    class="frame-number highlight">8</span></div>
                            <div class=assets-info>
                                <div class=current-info><span class=settings-name>Date</span><span
                                        class=assets-label>08.05.15</span> <span
                                        class=settings-name>Assets Size</span><span class=assets-label>2.7Mb</span>
                                    <span class=settings-name>#polygons</span><span class=assets-label>10.992</span>
                                </div>
                            </div>
                            <div class=assets-info>
                                <div class="rule right"></div>
                                <div class=current-info>
                                    <button data-model=8 data-assets=3 class="button button-load load-webgl">View
                                    </button>
                                    <button data-model=8 class="button button-load load-video">View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class=gallery-item>
                <div class=model-info-wrapper>
                    <picture class=model-background-img>
                        <source media="(min-width: 500px)" srcset=/img/backgroundScene9HD.jpg>
                        <source srcset=/img/backgroundScene9SD.jpg>
                        <img src=/img/backgroundScene9HD.jpg class=model-background-img alt=""></picture>
                    <div class=diagonal-overlay-down></div>
                    <div class=diagonal-overlay-left></div>
                    <div class="section-content gallery-content">
                        <div class=content-left>
                            <div class=content-title><span>Frame</span> <span
                                    class="frame-number highlight">9</span></div>
                            <div class=assets-info>
                                <div class=current-info><span class=settings-name>Date</span><span
                                        class=assets-label>23.05.15</span> <span
                                        class=settings-name>Assets Size</span><span class=assets-label>2.8Mb</span>
                                    <span class=settings-name>#polygons</span><span class=assets-label>4.905</span>
                                </div>
                            </div>
                            <div class=assets-info>
                                <div class="rule right"></div>
                                <div class=current-info>
                                    <button data-model=9 data-assets=3 class="button button-load load-webgl">View
                                    </button>
                                    <button data-model=9 class="button button-load load-video">View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</section>
<!--SECTION GALLERY END -->



