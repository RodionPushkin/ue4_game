PGDMP         $                z            ue4game    14.3    14.2     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    33385    ue4game    DATABASE     d   CREATE DATABASE ue4game WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Russian_Russia.1251';
    DROP DATABASE ue4game;
                postgres    false            �            1259    33538    Server    TABLE     v   CREATE TABLE public."Server" (
    "IP" character varying(250) NOT NULL,
    "Map" character varying(250) NOT NULL
);
    DROP TABLE public."Server";
       public         heap    postgres    false            �            1259    33532    User    TABLE     �   CREATE TABLE public."User" (
    "ID" bigint NOT NULL,
    "Email" character varying(129) NOT NULL,
    "Token" character varying(32) NOT NULL,
    "Nickname" character varying(32) NOT NULL
);
    DROP TABLE public."User";
       public         heap    postgres    false            �            1259    33531    User_ID_seq    SEQUENCE     v   CREATE SEQUENCE public."User_ID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public."User_ID_seq";
       public          postgres    false    210            �           0    0    User_ID_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."User_ID_seq" OWNED BY public."User"."ID";
          public          postgres    false    209            `           2604    33535    User ID    DEFAULT     h   ALTER TABLE ONLY public."User" ALTER COLUMN "ID" SET DEFAULT nextval('public."User_ID_seq"'::regclass);
 :   ALTER TABLE public."User" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    209    210    210            �          0    33538    Server 
   TABLE DATA           /   COPY public."Server" ("IP", "Map") FROM stdin;
    public          postgres    false    211   q       �          0    33532    User 
   TABLE DATA           D   COPY public."User" ("ID", "Email", "Token", "Nickname") FROM stdin;
    public          postgres    false    210   �       �           0    0    User_ID_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public."User_ID_seq"', 4, true);
          public          postgres    false    209            d           2606    33542    Server Server_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Server"
    ADD CONSTRAINT "Server_pkey" PRIMARY KEY ("IP");
 @   ALTER TABLE ONLY public."Server" DROP CONSTRAINT "Server_pkey";
       public            postgres    false    211            b           2606    33537    User User_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY ("ID");
 <   ALTER TABLE ONLY public."User" DROP CONSTRAINT "User_pkey";
       public            postgres    false    210            �   %   x��4�36�34��344�277��,N�K����� [u      �   �   x��=j�@�z�:����j��E��.���I6��-����S��a�HY������'?�*ڶG���@.13��>�G� ꁳ_���M��_��^�i�ϻ7?'~��Uu0d�S��-f�2��s.7����o�J}ʗ\�[7j��X8?�n��Q��SA���[����Y%���KU��m�]�r��� �~������R�     