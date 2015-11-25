<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "partner".
 *
 * @property integer $id
 * @property string $name
 * @property string $description
 * @property integer $user_creator
 * @property string $url
 * @property string $address
 * @property string $partnership_date
 * @property string $nda
 * @property string $msa
 * @property string $nda_file
 * @property string @msa_file
 * @property string @agreement_file
 * @property string $agreement
 * @property integer $tier
 * @property string $tags
 * @property string $categories
 */
class Partner extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public $ndafile;
    public $msafile;
    public $agreementfile;


    public static function tableName()
    {
        return 'partner';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'description', 'user_creator', 'url', 'address', 'partnership_date', 'nda', 'msa', 'agreement', 'tier', 'tags', 'categories'], 'required'],
            [['description', 'address', 'nda', 'msa', 'agreement', 'tags', 'categories', 'nda_file', 'msa_file', 'agreement_file'], 'string'],
            [['user_creator', 'tier'], 'integer'],
            [['ndafile', 'msafile', 'agreementfile'], 'file'],
            [['partnership_date'], 'safe'],
            [['name', 'url'], 'string', 'max' => 40]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Partner Name',
            'description' => 'Partner Description',
            'user_creator' => 'Partnership Creator',
            'url' => 'Url',
            'address' => 'Address',
            'partnership_date' => 'Partnership Date',
            'nda' => 'Non-Disclosure Agreement Text',
            'msa' => 'Master Services Agreement Text',
            'agreement' => 'Partnership Agreement Text',
            'tier' => 'Partnership Tier',
            'tags' => 'Tags',
            'categories' => 'Categories',
            'ndafile' => 'Non-Disclosure Agreement File',
            'msafile' => 'Master Services Agreement File',
            'agreementfile' => 'Partnership Agreement File',
        ];
    }

    /**
     * @inheritdoc
     * @return PartnerQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new PartnerQuery(get_called_class());
    }
}
