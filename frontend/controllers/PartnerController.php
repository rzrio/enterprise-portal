<?php

namespace frontend\controllers;

use Yii;
use app\models\Partner;
use app\models\PartnerSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use yii\web\UploadedFile;

/**
 * PartnerController implements the CRUD actions for Partner model.
 */
class PartnerController extends Controller
{
    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['post'],
                ],
            ],
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['index','create', 'delete', 'update', 'view'],
                'rules' => [
                    [
                        'allow' => true,
                        'actions' => ['index', 'create', 'delete', 'update', 'view'],
                        'roles' => ['@'],
                    ],
                ],
            ],
        ];
    }

    /**
     * Lists all Partner models.
     * @return mixed
     */
    public function actionIndex()
    {
        $searchModel = new PartnerSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single Partner model.
     * @param integer $id
     * @return mixed
     */
    public function actionView($id)
    {
        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);
    }

    /**
     * Creates a new Partner model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
      // get the instance of the uploaded files.


        $model = new Partner();

        if ($model->load(Yii::$app->request->post())) {

            $ndaname = $model->name . '-NDA';
            $msaname = $model->name . '-MSA';
            $agreementname = $model->name . '-PA';

            //save the actual files into the uploads directory

            $model->ndafile = UploadedFile::getInstance($model, 'ndafile');
            $model->msafile = UploadedFile::getInstance($model, 'msafile');
            $model->agreementfile = UploadedFile::getInstance($model, 'agreementfile');

            $model->ndafile->saveAs('uploads/'. $ndaname . '.' . $model->ndafile->extension);
            $model->msafile->saveAs('uploads/'. $msaname . '.' . $model->msafile->extension);
            $model->agreementfile->saveAs('uploads/'. $agreementname . '.' . $model->agreementfile->extension);

            //save the path in the db column

            $model->nda_file = 'uploads/'. $ndaname . '.' . $model->ndafile->extension;
            $model->msa_file = 'uploads/'. $msaname . '.' . $model->msafile->extension;
            $model->agreement_file = 'uploads/'. $agreementname . '.' . $model->agreementfile->extension;


            $model->save();
            return $this->redirect(['view', 'id' => $model->id]);
        } else {
            return $this->render('create', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Updates an existing Partner model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        } else {
            return $this->render('update', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Deletes an existing Partner model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $id
     * @return mixed
     */
    public function actionDelete($id)
    {
        $this->findModel($id)->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the Partner model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return Partner the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Partner::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }
}
