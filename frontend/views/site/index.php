<?php
use app\models\Lead;
use app\models\Partner;
use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $form yii\widgets\ActiveForm */
/* @var $model \frontend\modules\user\models\LoginForm */
/* @var $searchModel app\models\PartnerSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = "rzr.io";
$this->layout = 'splash';
?>


<?php if(Yii::$app->user->isGuest): ?>

    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/splashstyle.css">
    <script src="js/splashindex.js"></script>

<div style="position:relative;">
    <canvas id='canv' z-index=-200></canvas>
    <?php $form = ActiveForm::begin(['id' => 'login-form', 'class' => 'form']); ?>


        <span class=settings-name><?php echo $form->field($model, 'identity') ?></span>
                                    <span
                                        class=settings-name><?php echo $form->field($model, 'password')->passwordInput() ?></span>
                                    <span
                                        class=settings-name><?php echo Html::submitButton(Yii::t('frontend', 'Login'), ['id' => 'login-button', 'name' => 'login-button', 'class' => 'button button-load load-video', 'data-model' => '1']) ?></span>
        <?php ActiveForm::end(); ?>
</div>



<?php else : ?>
    <div class="current-info">

        <h2> Welcome <?= Yii::$app->user->identity->username ?>, you're already logged in.</h2>

        <div class="container">
            <h2>Main Menu</h2>
            <ul class="nav nav-pills">
                <li class="active"><a data-toggle="pill" href="#home">Home</a></li>
                <li><a data-toggle="pill" href="#partners">Partners</a></li>
                <li><a data-toggle="pill" href="#opps">Opportunities</a></li>
                <li><a data-toggle="pill" href="#tech">Technology</a></li>
                <li><a data-toggle="pill" href="#contracts">Contracts</a></li>
                <li><a data-toggle="pill" href="#sales">Sales</a></li>
            </ul>

            <div class="tab-content">
                <div id="home" class="tab-pane fade in active">
                    <h3>HOME</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div id="partners" class="tab-pane fade">
                    <h3>Partners</h3>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Partner Table: <?= Html::a('Here', ['partner/index']) ?></p>

                    <ul>
                    <?php

                    foreach (Partner::find()->each() as $partner){


                    echo "<li> " . Html::a($partner->name, $partner->url)  . "</li>";


                    }

                    ?>
                    </ul>
                </div>

                <div id="opps" class="tab-pane fade">
                    <h3>Opportunities</h3>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Opportunities Table: <?= Html::a('Here', ['lead/index']) ?></p>

                    <ul>
                        <?php

                        foreach (Lead::find()->each() as $lead){


                            echo "<li> "  . Html::img($lead->picture, ['width'=>'350','height'=>'350'],['alt' => $lead->name])
                        . Html::a($lead->name, ['lead/view','id' => $lead->id])  . "</li>";


                        }

                        ?>
                    </ul>
                </div>

                <div id="tech" class="tab-pane fade">
                    <h3>Tech</h3>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Tech Table</p>

                </div>
                <div id="contracts" class="tab-pane fade">
                    <h3>Contracts</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>

                </div>
                <div id="sales" class="tab-pane fade">
                    <h3>Sales</h3>
                    <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
            </div>
        </div>

    </div>


<?php endif; ?>



